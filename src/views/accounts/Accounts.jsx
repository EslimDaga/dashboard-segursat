import {
	CheckBadgeIcon,
	ChevronDoubleRightIcon,
	HomeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Accounts = () => {
	return (
		<section className="w-full h-full">
			<div className="flex items-center px-6 py-6">
				<Link
					to="/dashboard"
					className="text-dark-mode-tertiary dark:text-gray-200"
				>
					<HomeIcon className="w-5 h-5" />
				</Link>
				<span className="mx-5 text-dark-mode-secondary dark:text-gray-300">
					<ChevronDoubleRightIcon className="w-5 h-5" />
				</span>
				<Link
					to="/accounts"
					className="flex items-center text-dark-mode-tertiary dark:text-gray-200 hover:text-segursat-primary-hover dark:hover:text-segursat-primary-hover"
				>
					<CheckBadgeIcon className="w-5 h-5" />
					<span className="mx-2 font-bold">Cuentas</span>
				</Link>
			</div>
		</section>
	);
};

export default Accounts;
