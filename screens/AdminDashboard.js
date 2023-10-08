import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  getfeedbacks,
  get_feedbacks_by_feedback_type,
  deleteFeedback,
} from "../services/FeedbackServices";
import { FlatList } from "react-native";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [feedbackType, setFeedbackType] = useState("All");

  useEffect(() => {
    let mounted = true;
    if (feedbacks.length && !isUpdated) {
      return;
    }
    getfeedbacks().then((data) => {
      if (mounted) {
        setFeedbacks(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, feedbacks]);

  const handleFilter = (e, value) => {
    e.preventDefault();
    setFeedbackType(value);
    get_feedbacks_by_feedback_type(value).then((data) => {
      setFeedbacks(data);
    });
  };
  const handleAll = (e) => {
    e.preventDefault();
    setFeedbackType("All");
    getfeedbacks().then((data) => {
      setFeedbacks(data);
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#565658" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: "rgba(255,255,255,0.8)",
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginHorizontal: 8,
          borderRadius: 5,
        }}
      >
        <TouchableOpacity
          style={[
            styles.filterButton,
            feedbackType === "All" && styles.activeFilter,
          ]}
          onPress={(event) => handleAll(event, "All")}
        >
          <Text
            style={[
              styles.filterButtonText,
              feedbackType === "All" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            feedbackType === "Accuracy" && styles.activeFilter,
          ]}
          onPress={(event) => handleFilter(event, "Accuracy")}
        >
          <Text
            style={[
              styles.filterButtonText,
              feedbackType === "Accuracy" && styles.activeFilterText,
            ]}
          >
            Accuracy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            feedbackType === "Performance" && styles.activeFilter,
          ]}
          onPress={(event) => handleFilter(event, "Performance")}
        >
          <Text
            style={[
              styles.filterButtonText,
              feedbackType === "Performance" && styles.activeFilterText,
            ]}
          >
            Performance
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={feedbacks}
        keyExtractor={(item) => item.feedback_id.toString()}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "column",
                padding: 30,
                marginBottom: 20,
                borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.8)",
                elevation: 10,
              }}
            >
              <Text style={{ fontSize: 17, opacity: 0.7 }}>
                {item.feedback_details}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>
                {item.feedback_type}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default AdminDashboard;

const styles = StyleSheet.create({
  filterButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 5,
  },
  activeFilter: {
    backgroundColor: "#565658",
    color: "white",
  },
  filterButtonText: {
    fontSize: 17,
    opacity: 0.7,
  },
  activeFilterText: {
    color: "white",
  },
});
