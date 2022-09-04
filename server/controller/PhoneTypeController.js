const findAllPhoneType = async (req, res) => {
  try {
    const phoneType = await req.context.models.phone_number_type.findAll();
    return res.send(phoneType);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOnePhoneType = async (req, res) => {
  try {
    const phoneType = await req.context.models.phone_number_type.findOne({
      where: { ponty_code: req.params.id },
    });
    return res.send(phoneType);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAllPhoneType,
  findOnePhoneType,
};
