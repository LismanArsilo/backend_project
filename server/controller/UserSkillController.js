const findAllSkillSuper = async (req, res) => {
  try {
    const userSkill = await req.context.models.users_skill.findAll();
    return res.send(userSkill);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findAllSkill = async (req, res) => {
  try {
    const usersSkill = await req.context.models.users_skill.findAll({
      where: { uski_entity_id: req.params.id },
    });
    return res.send(usersSkill);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOneSkill = async (req, res) => {
  try {
    const userSkill = await req.context.models.users_skill.findOne({
      where: { uski_entity_id: req.params.id, uski_id: req.params.skill },
    });
    return res.send(userSkill);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const createSkill = async (req, res) => {
  try {
    const userSkill = await req.context.models.users_skill.create({
      uski_entity_id: req.body.uski_entity_id,
      uski_modified_date: new Date(),
      uski_skty_name: req.body.uski_skty_name,
    });
    return res.send(userSkill);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const deletedSkill = async (req, res) => {
  try {
    const userSkill = await req.context.models.users_skill.destroy({
      where: { uski_id: req.params.id },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAllSkillSuper,
  findAllSkill,
  findOneSkill,
  createSkill,
  deletedSkill,
};
