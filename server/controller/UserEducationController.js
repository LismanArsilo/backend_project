const findOneEducation = async (req, res) => {
  try {
    const userEducation = await req.context.models.users_education.findOne({
      where: { usdu_id: req.params.education, usdu_entity_id: req.params.id },
    });
    return res.send(userEducation);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const findAllEducation = async (req, res) => {
  try {
    const userEducation = await req.context.models.users_education.findAll({
      where: { usdu_entity_id: req.params.id },
    });
    return res.send(userEducation);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const findAllSuperEducation = async (req, res) => {
  try {
    const userEducation = await req.context.models.users_education.findAll();
    return res.send(userEducation);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const deletedEducation = async (req, res) => {
  try {
    const userEducation = await req.context.models.users_education.destroy({
      where: { usdu_id: req.params.id },
    });
    return res.send(`Deleted Success`);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const createEducation = async (req, res) => {
  try {
    const userEducation = await req.context.models.users_education.create({
      usdu_entity_id: req.body.usdu_entity_id,
      usdu_school: req.body.usdu_school,
      usdu_degree: req.body.usdu_degree,
      usdu_field_study: req.body.usdu_field_study,
      usdu_start_date: req.body.usdu_start_date,
      usdu_end_date: req.body.usdu_end_date,
      usdu_grade: req.body.usdu_grade,
      usdu_activities: req.body.usdu_activities,
      usdu_description: req.body.usdu_description,
      usdu_modified_date: new Date(),
    });
    return res.send(userEducation);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const updateEducation = async (req, res) => {
  try {
    const userEducation = await req.context.models.users_education.update(
      {
        usdu_entity_id: req.params.id,
        usdu_school: req.body.usdu_school,
        usdu_degree: req.body.usdu_degree,
        usdu_field_study: req.body.usdu_field_study,
        usdu_start_date: req.body.usdu_start_date,
        usdu_end_date: req.body.usdu_end_date,
        usdu_grade: req.body.usdu_grade,
        usdu_activities: req.body.usdu_activities,
        usdu_description: req.body.usdu_description,
        usdu_modified_date: new Date(),
      },
      { returning: true, where: { usdu_id: req.params.id } }
    );
    return res.send(userEducation);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAllSuperEducation,
  findAllEducation,
  findOneEducation,
  createEducation,
  updateEducation,
  deletedEducation,
};
