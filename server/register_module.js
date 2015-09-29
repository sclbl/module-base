Meteor.startup(() => {
  const module = {
    name: Meteor.settings.public.scalable.module.name,
    developer: Meteor.settings.public.scalable.module.developer,
    rootUrl: Meteor.absoluteUrl()
  };

  const scalableConnection = getScalableConnection();
  const secretKey = Meteor.settings.scalable.core.settings.secretKey;

  scalableConnection.call('scalable.registerModule', module, secretKey);
});
