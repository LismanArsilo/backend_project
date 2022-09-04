const findAllSuper = async (req, res) => {
  try {
    const usersRole = await req.context.models.users_roles.findAll({
      include: [
        {
          model: req.context.models.roles,
          as: "usro_role",
        },
      ],
    });
    return res.send(usersRole);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOneRole = async (req, res) => {
  try {
    const usersRole = await req.context.models.users_roles.findOne({
      where: { usro_entity_id: req.params.id },
      include: [
        {
          model: req.context.models.roles,
          as: "usro_role",
        },
      ],
    });
    return res.send(usersRole);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export default {
  findOneRole,
  findAllSuper,
};
