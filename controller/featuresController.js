const features = require('./../db/features_schema.js');

exports.getAllFeatures = async (req, res) => {
  try {
    const featuresFound = await features.find();
    res.status(200).json({
      status: 'success',
      results: featuresFound.length,
      data: {
        featuresFound,
      },
    });
  } catch {
    res.status(404).json({
      status: 'failed',
      message: 'Can not get all features',
    });
  }
};
