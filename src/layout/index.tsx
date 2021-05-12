import React, { useEffect } from "react";
import { View, SafeAreaView, ActivityIndicator, ScrollView } from "react-native";
import { IProps } from "./interface";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../reducers";
import { fetchUserFromToken } from "../actions/auth";
import * as Views from "../views";

const LayoutWrapper = ({ children }: IProps) => {
	const dispatch = useDispatch();
	const auth = useSelector((state: StoreState) => state.auth);

	useEffect(() => {
		dispatch(fetchUserFromToken());
	}, [auth.type]);

	const isLoading = auth.type === "loading";

	return isLoading ? (
		<View style={styles.centerChildren}>
			<ActivityIndicator />
		</View>
	) : (
		<SafeAreaView style={styles.outer}>
			<View style={styles.inner}>{children}</View>
		</SafeAreaView>
	);
};

export default LayoutWrapper;
