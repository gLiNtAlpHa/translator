import translate from "translate-google";

const translator = async (req, res, next) => {
	const transObj = req.body.trans;
	try {
		const translatedData = await translate(transObj, { to: req.body.lang });
		res.status(200).json(translatedData);
	} catch (err) {
		res.status(400).send(err);
	}
};

export { translator };
