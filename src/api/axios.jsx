import axios from "axios";

const default_path = "web/api/";

export default axios.create({
	baseURL: `http://desarrollo.segursat.com/${default_path}`,
});
