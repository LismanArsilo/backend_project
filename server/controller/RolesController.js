const findAllRoles = async (req, res) => {
  try {
    const roles = await req.context.models.roles.findAll();
    return res.send(roles);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const findOneRoles = async (req, res) => {
  try {
    const roles = await req.context.models.roles.findOne({
      where: { role_id: req.params.id },
    });
    return res.send(roles);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export default {
  findAllRoles,
  findOneRoles,
};
