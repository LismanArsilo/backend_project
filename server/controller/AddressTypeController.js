const findAllAddressType = async (req, res) => {
  try {
    const addressType = await req.context.models.address_type.findAll();
    return res.send(addressType);
  } catch (error) {
    return res.status(404).send(error);
  }
};

const findOneAddressType = async (req, res) => {
  try {
    const addressType = await req.context.models.address_type.findOne({
      where: { adty_id: req.params.id },
    });
    return res.send(addressType);
  } catch (error) {
    return res.status(404).send(error);
  }
};

export default {
  findAllAddressType,
  findOneAddressType,
};
