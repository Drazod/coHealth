const members = require('./../db/members_schema.js');

exports.getAllMembers = async (req, res) => {
  try {
    const member = await members.find();
    res.status(200).json({
      status: 'success',
      results: member.length,
      data: {
        member,
      },
    });
  } catch {
    res.status(404).json({
      status: 'failed',
      message: 'Can not get members from database',
    });
  }
};
