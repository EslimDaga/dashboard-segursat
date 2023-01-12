import { Fragment, useContext, useState } from "react";
import { Popover, Switch, Transition } from "@headlessui/react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { navigation } from "../../routes/routes";
import { Link, NavLink } from "react-router-dom";
import {
	UserCircleIcon,
	UserIcon,
	XMarkIcon,
	Bars3Icon,
	ArrowLeftOnRectangleIcon,
	MoonIcon,
	UsersIcon,
} from "@heroicons/react/24/solid";
import AuthContext from "../../context/auth/AuthProvider";
import LogoMobile from "../../assets/images/app/icon-orange-segursat.png";
import LogoDark from "../../assets/images/app/logo-orange.png";
import LogoLight from "../../assets/images/app/logo.png";

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { logout } = useContext(AuthContext);

	const [enabled, setEnabled] = useState(theme === "dark" ? true : false);

	const handleChange = () => {
		setEnabled(!enabled);
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<Popover className="relative bg-white-primary dark:bg-dark-mode-primary">
			<div className="mx-auto w-full px-6 shadow-xl">
				<div className="flex items-center justify-between py-6 sm:py-4 md:py-4 lg:py-4 md:justify-between md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#">
							<span className="sr-only">Segursat SAC</span>
							<img
								className="h-6 w-auto sm:h-8"
								src={theme === "dark" ? LogoDark : LogoLight}
								alt="logo-segursat"
							/>
						</a>
					</div>
					<div className="-my-2 -mr-2 md:hidden">
						<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-dark-mode-primary bg- p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span className="sr-only">Open menu</span>
							<Bars3Icon
								className="h-6 w-6 text-dark-mode-primary dark:text-white-primary "
								aria-hidden="true"
							/>
						</Popover.Button>
					</div>
					<Popover.Group
						as="nav"
						className="hidden space-x-6 md:flex md:items-center"
					>
						{navigation.map(
							item =>
								item.accessBy === "authenticated" && (
									<NavLink
										to={item.href}
										key={item.id}
										className={({ isActive }) =>
											isActive
												? "flex items-center text-base font-bold text-white-primary hover:text-white-tertiary cursor-pointer bg-segursat-primary px-3 py-3 rounded-lg"
												: "flex items-center text-base font-bold text-dark-mode-primary dark:text-white-primary hover:text-dark-mode-tertiary dark:hover:text-white-tertiary cursor-pointer"
										}
									>
										{item.icon}
										<h3 className="mt-[1px]">{item.name}</h3>
									</NavLink>
								)
						)}
						<Popover className="flex items-center">
							<>
								<Popover.Button className="focus:outline-none">
									<UserCircleIcon className="h-10 w-10 text-dark-mode-primary dark:text-white-primary hover:text-dark-mode-tertiary dark:hover:text-white-tertiary" />
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute z-10 w-80 px-6 mt-12 right-0 top-5">
										<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
											<div className="relative grid gap-1 bg-white-primary dark:bg-dark-mode-secondary">
												<Link
													to="/profile"
													className="-m-0 w-full flex items-center p-2 transition duration-150 ease-in-out hover:bg-white-tertiary dark:hover:bg-dark-mode-tertiary focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
												>
													<div className="p-2 mr-3">
														<UserIcon className="h-6 w-6 text-dark-mode-primary dark:text-white-primary" />
													</div>
													<p className="text-base font-bold text-gray-900 dark:text-white-primary">
														Mi perfil
													</p>
												</Link>
												<a
													onClick={handleLogout}
													className="-m-0 w-full flex items-center p-2 transition duration-150 ease-in-out hover:bg-white-tertiary dark:hover:bg-dark-mode-tertiary focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer"
												>
													<div className="p-2 mr-3">
														<ArrowLeftOnRectangleIcon className="h-6 w-6 text-dark-mode-primary dark:text-white-primary" />
													</div>
													<p className="text-base font-bold text-gray-900 dark:text-white-primary">
														Cerrar Sesión
													</p>
												</a>
												<a className="-m-0 w-full flex items-center justify-between p-2 transition duration-150 ease-in-out hover:bg-white-tertiary dark:hover:bg-dark-mode-tertiary focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 cursor-pointer">
													<div
														className="flex items-center"
														onClick={() => handleChange()}
													>
														<div className="p-2 mr-3">
															<MoonIcon className="h-6 w-6 text-dark-mode-primary dark:text-white-primary" />
														</div>
														<p className="text-base font-bold text-dark-mode-primary dark:text-white-primary">
															Modo Nocturno
														</p>
													</div>
													<Switch
														checked={enabled}
														onChange={() => handleChange()}
														className={`${
															enabled ? "bg-sky-600" : "bg-gray-600"
														} relative inline-flex items-center h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
													>
														<span className="sr-only">Dark Mode</span>
														<span
															aria-hidden="true"
															className={`${
																enabled ? "translate-x-6" : "translate-x-1"
															} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
														/>
													</Switch>
												</a>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						</Popover>
					</Popover.Group>
				</div>
			</div>
			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
				>
					<div className="divide-y-2 divide-white-primary dark:divide-dark-mode-primary rounded-lg bg-white dark:bg-dark-mode-secondary dar shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src={LogoMobile}
										alt="logo-segursat"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-dark-mode-primary p-2 text-white-secondary hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-inset">
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{navigation.map(
										item =>
											item.accessBy === "authenticated" && (
												<NavLink
													key={item.id}
													to={item.href}
													className="-m-3 flex items-center rounded-md p-3 hover:bg-white-secondary"
												>
													{item.icon}
													<span className="ml-3 text-base font-bold text-dark-mode-primary dark:text-white-primary">
														{item.name}
													</span>
												</NavLink>
											)
									)}
									<Link
										to="/profile"
										className="-m-3 flex items-center rounded-md p-3 hover:bg-white-secondary"
									>
										<UsersIcon className="w-5 h-5 mr-1 text-dark-mode-primary dark:text-white-primary" />
										<span className="ml-3 text-base font-bold text-dark-mode-primary dark:text-white-primary">
											Mi perfil
										</span>
									</Link>
									<a
										onClick={() => {
											console.log("logout");
										}}
										className="-m-3 flex items-center rounded-md p-3 hover:bg-white-secondary"
									>
										<ArrowLeftOnRectangleIcon className="w-5 h-5 mr-1 text-dark-mode-primary dark:text-white-primary" />
										<span className="ml-3 text-base font-bold text-dark-mode-primary dark:text-white-primary">
											Cerrar sesión
										</span>
									</a>
									<a
										onClick={() => handleChange()}
										className="-m-3 flex items-center justify-between rounded-md p-3"
									>
										<div className="flex items-center">
											<MoonIcon className="w-5 h-5 mr-1 text-dark-mode-primary dark:text-white-primary" />
											<span className="ml-3 text-base font-bold text-dark-mode-primary dark:text-white-primary">
												Modo Nocturno
											</span>
										</div>
										<Switch
											checked={enabled}
											onChange={() => handleChange()}
											className={`${
												enabled ? "bg-sky-600" : "bg-gray-600"
											} relative inline-flex items-center h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
										>
											<span className="sr-only">Dark Mode</span>
											<span
												aria-hidden="true"
												className={`${
													enabled ? "translate-x-6" : "translate-x-1"
												} pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
											/>
										</Switch>
									</a>
								</nav>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Header;
