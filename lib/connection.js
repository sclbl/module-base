getScalableConnection = () => {
  return DDP.connect(Meteor.settings.public.scalable.core.settings.rootUrl);
};
