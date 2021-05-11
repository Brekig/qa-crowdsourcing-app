import React from "react";
import { StyleSheet, View } from "react-native";
import { Organisms } from "./src/components";
import { InputElementTypes } from "./src/declerations";
import LayoutWrapper from "./src/layout";
export default function App() {
	return (
		<LayoutWrapper>
			<View>
				<Organisms.Forms.Builder
					buttonLabel="Bua til adgang"
					form={{
						email: {
							type: InputElementTypes.text,
							value: "njall16@ru.is",
							label: "Log in",
						},
						password: {
							type: InputElementTypes.text,
							value: "",
							label: "Password",
						},
					}}
					url="/api/auth/authenticate"
					HTTPmethod="post"
					onSubmit={() => null}
				/>
			</View>
		</LayoutWrapper>
	);
}
