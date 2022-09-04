const findAllSkillType = async (req, res) => {
  try {
    const userSkill = await req.context.models.skill_type.findAll();
    return res.send(userSkill);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export default {
  findAllSkillType,
};
