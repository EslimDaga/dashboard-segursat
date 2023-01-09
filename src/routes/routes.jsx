import Accounts from "../views/accounts/Accounts";
import Login from "../views/authentication/Login";
import Map from "../views/map/Map";
import Units from "../views/units/Units";
import Users from "../views/users/Users";
import {
	CheckBadgeIcon,
	MapIcon,
	TruckIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";

export const navigation = [
	{
		id: 1,
		component: <Login />,
		href: "/login",
		accessBy: "non-authenticated",
	},
	{
		id: 2,
		component: <Map />,
		href: "/map",
		accessBy: "authenticated",
		name: "Mapa",
		icon: <MapIcon className="w-5 h-5 mr-1" />,
	},
	{
		id: 3,
		component: <Accounts />,
		href: "/accounts",
		accessBy: "authenticated",
		name: "Cuentas",
		icon: <CheckBadgeIcon className="w-5 h-5 mr-1" />,
	},
	{
		id: 4,
		component: <Users />,
		href: "/users",
		accessBy: "authenticated",
		name: "Usuarios",
		icon: <UsersIcon className="w-5 h-5 mr-1" />,
	},
	{
		id: 5,
		component: <Units />,
		href: "/units",
		accessBy: "authenticated",
		name: "Unidades",
		icon: <TruckIcon className="w-5 h-5 mr-1" />,
	},
];
