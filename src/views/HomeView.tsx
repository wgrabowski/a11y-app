import { Banner } from "../branding";
import { Story } from "../branding/story";
import { Explore } from "../branding/explore";
import { Credentials } from "../branding/credentials";

export const HomeView = () => {
	return (
		<>
			<Banner />
			<Story />
			<Explore />
			<Credentials />
		</>
	);
};
