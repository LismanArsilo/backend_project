//Get Table
const findOneUser = async (req, res) => {
  try {
    const users = await req.context.models.users.findOne({
      where: { user_entity_id: req.params.id },
    });
    return res.send(users);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const findAllUser = async (req, res) => {
  try {
    const users = await req.context.models.users.findAll();
    return res.send(users);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateUser = async (req, res) => {
  const { files, fields } = req.fileAttrb;
  try {
    const users = await req.context.models.users.update(
      {
        user_name: fields[0].value,
        user_first_name: fields[1].value,
        user_last_name: fields[2].value,
        user_modified_date: new Date(),
        user_photo: files[0].file.newFilename,
      },
      { returning: true, where: { user_entity_id: req.params.id } }
    );
    return res.send(users);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateNoFileUser = async (req, res) => {
  try {
    const users = await req.context.models.users.update(
      {
        user_name: req.body.user_name,
        user_first_name: req.body.user_first_name,
        user_last_name: req.body.user_last_name,
        user_modified_date: new Date(),
      },
      { returning: true, where: { user_entity_id: req.params.id } }
    );
    return res.send(users);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const updatePassword = async (req, res) => {
  try {
    const userPassword = await req.context.models.user(
      {
        user_password: req.body.user_password,
      },
      { returning: true, where: { user_entity_id: req.params.id } }
    );
    return res.send(userPassword);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findOneUser,
  findAllUser,
  updateUser,
  updateNoFileUser,
  updatePassword,
};
