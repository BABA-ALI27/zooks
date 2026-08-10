import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    title: "Exercise",
    tasks: "12 Tasks",
    image: require("./assets/exercise.png"),
  },
  {
    title: "Study",
    tasks: "12 Tasks",
    image: require("./assets/study.png"),
  },
  {
    title: "Coding",
    tasks: "8 Tasks",
    image: require("./assets/coding.png"),
  },
  {
    title: "Design",
    tasks: "6 Tasks",
    image: require("./assets/design.png"),
  },
  {
    title: "Reading",
    tasks: "10 Tasks",
    image: require("./assets/reading.png"),
  },
  {
    title: "Personal",
    tasks: "7 Tasks",
    image: require("./assets/personal.png"),
  },
  {
    title: "Work",
    tasks: "9 Tasks",
    image: require("./assets/work.png"),
  },
];

const ongoingTasks = [
  "Mobile App Development",
  "Web Development",
  "Our time",
  "Plenty Of Fishes ",
  "Match seniors",
  "Fertish",
  "Venmo",
  "Cash App",
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello , Devs</Text>
            <Text style={styles.subtitle}>14 tasks today</Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
  <Image
    source={require("./assets/profile.png")}
    style={styles.profileImage}
  />
</TouchableOpacity>
        </View>

        {/* SEARCH */}
        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons
              name="search-outline"
              size={23}
              color="#111"
            />

            <TextInput
              placeholder="Search"
              placeholderTextColor="#111"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity style={styles.filterButton}>
            <Ionicons
              name="options-outline"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* CATEGORIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryCard}
              activeOpacity={0.8}
            >
              <Text style={styles.categoryTitle}>
                {category.title}
              </Text>

              <Text style={styles.categoryTasks}>
                {category.tasks}
              </Text>

              <View style={styles.categoryIcon}>
                <Image
                  source={category.image}
                  style={styles.categoryImage}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ONGOING TASK */}
        <View style={styles.ongoingHeader}>
          <Text style={styles.sectionTitle}>Ongoing Task</Text>
        </View>

        <View style={styles.taskList}>
          {ongoingTasks.map((task, index) => (
            <TouchableOpacity
              key={index}
              style={styles.taskCard}
              activeOpacity={0.8}
            >
              <Text style={styles.taskTitle}>
                {task}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },

  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 30,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: 31,
    fontWeight: "700",
    color: "#000",
    letterSpacing: -0.8,
  },

  subtitle: {
    fontSize: 12,
    color: "#000",
    marginTop: 2,
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 50,
    height: 52,
    borderRadius: 25,
  },

  /* SEARCH */

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 22,
  },

  searchBox: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#FBF9F7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },

  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#F45132",
    justifyContent: "center",
    alignItems: "center",
  },

  /* CATEGORIES */

  sectionHeader: {
    marginTop: 31,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "600",
    color: "#000",
  },

  categoryScroll: {
    gap: 24,
    paddingRight: 20,
  },

  categoryCard: {
    width: 180,
    height: 190,
    backgroundColor: "#FBF9F7",
    borderRadius: 17,
    paddingTop: 16,
    paddingHorizontal: 16,
    overflow: "hidden",
  },

  categoryTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  categoryTasks: {
    fontSize: 12,
    color: "#000",
    marginTop: 2,
  },

  categoryIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryImage: {
    width: 130,
    height: 150,
  },

  /* ONGOING TASK */

  ongoingHeader: {
    marginTop: 26,
    marginBottom: 10,
  },

  taskList: {
    gap: 12,
  },

  taskCard: {
    height: 128,
    backgroundColor: "#FBF9F7",
    borderWidth: 1,
    borderColor: "#EBCDB5",
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 15,
  },

  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});