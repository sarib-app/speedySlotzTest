import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { theme3 } from "../../assets/branding/themes";
import { saveProfiles } from "../../api/ApiCall";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
const UserDentalInsuranceForm = ({ profilesData }) => {
  const [claimDetails, setClaimDetails] = useState(
    profilesData?.claimDetails || ""
  );
  const [contact, setContact] = useState(profilesData?.contact || "");
  const [coverageDetails, setCoverageDetails] = useState(
    profilesData?.coverageDetails || ""
  );
  const [exclusions, setExclusions] = useState(profilesData?.exclusions || "");
  const [policyNumber, setPolicyNumber] = useState(
    profilesData?.policyNumber || ""
  );
  const [provider, setProvider] = useState(profilesData?.provider || "");

  const handleSave = () => {
    let profileData = {
      userDentalInsurance: {
        claimDetails,
        contact,
        coverageDetails,
        exclusions,
        policyNumber,
        provider,
      },
    };
    const response = saveProfiles(profileData);
    // Add logic to save this information
  };

  return (
    <ScrollView style={styles.scrollView} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* Insurance Provider Name */}
        <View style={styles.iconInputContainer}>
          <FontAwesome5 name="building" size={20} color={theme3.primaryColor} />
          <TextInput
            style={styles.input}
            placeholder="Insurance Provider"
            value={provider}
            onChangeText={setProvider}
          />
        </View>

        {/* Policy Number */}
        <View style={styles.iconInputContainer}>
          <FontAwesome5 name="file-alt" size={20} color={theme3.primaryColor} />
          <TextInput
            style={styles.input}
            placeholder="Policy Number"
            value={policyNumber}
            onChangeText={setPolicyNumber}
          />
        </View>

        {/* Coverage Details */}
        <View style={styles.iconInputContainer}>
          <FontAwesome5 name="tooth" size={20} color={theme3.primaryColor} />
          <TextInput
            style={styles.input}
            placeholder="Coverage Details"
            value={coverageDetails}
            onChangeText={setCoverageDetails}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Insurance Contact Number */}
        <View style={styles.iconInputContainer}>
          <FontAwesome5 name="phone" size={20} color={theme3.primaryColor} />
          <TextInput
            style={styles.input}
            placeholder="Contact Information"
            value={contact}
            onChangeText={setContact}
          />
        </View>

        {/* Claim Process Details */}
        <View style={styles.iconInputContainer}>
          <FontAwesome5
            name="clipboard-list"
            size={20}
            color={theme3.primaryColor}
          />
          <TextInput
            style={styles.input}
            placeholder="Claim Details"
            value={claimDetails}
            onChangeText={setClaimDetails}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Exclusions or Limitations */}
        <View style={styles.iconInputContainer}>
          <FontAwesome5
            name="times-circle"
            size={20}
            color={theme3.primaryColor}
          />
          <TextInput
            style={styles.input}
            placeholder="Exclusions"
            value={exclusions}
            onChangeText={setExclusions}
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  iconInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.25,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: theme3.fontColor,
  },
  button: {
    width: "100%",
    backgroundColor: theme3.primaryColor,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserDentalInsuranceForm;
