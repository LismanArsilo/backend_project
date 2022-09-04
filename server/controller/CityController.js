const findAllCity = async (req, res) => {
  try {
    const city = await req.context.models.city.findAll();
    return res.send(city);
  } catch (error) {
    return res.status(404).send(error);
  }
};
const findOneCity = async (req, res) => {
  try {
    const city = await req.context.models.city.findOne({
      where: { city_id: req.params.id },
    });
    return res.send(city);
  } catch (error) {
    return res.status(404).send(error);
  }
};
export default {
  findAllCity,
  findOneCity,
};
