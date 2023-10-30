const news = require('./../db/images_slider_schema.js');

exports.get6NearsestNews = async (req, res) => {
  try {
    const newsFound = await news.find().sort('-createdAt').limit(6);
    res.status(200).json({
      status: 'success',
      results: newsFound.length,
      data: {
        newsFound,
      },
    });
  } catch {
    res.status(404).json({
      status: 'failed',
      message: 'Can not get 6 nearest news from database',
    });
  }
};
