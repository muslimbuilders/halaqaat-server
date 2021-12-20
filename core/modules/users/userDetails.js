import UserModel from '../../../models/user.js';

//find user by usingId that is included in each halqah
const userDetails = async (userId) => {
  let user = await UserModel.findOne({ _id: userId });
  if (!user) throw new Error('User does not exit');
  let organizer = {
    organizerFirstName: user.firstName,
    organizerLastName: user.lastName,
    organizerEmail: user.email,
  };
  return organizer;
};

export default { userDetails };
