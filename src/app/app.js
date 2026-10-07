import { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Habit } from "./Habit";
import { styles } from "./styles";

export default class App extends Component {
  // our data: just plain variables
  habits = [];
  notes = [];
  text = "";

  // when typing, save the text
  typing = (value) => {
    this.text = value;
    this.forceUpdate(); // redraw the screen
  };

  addHabit = () => {
    if (this.text === "") return;
    this.habits.push(new Habit(this.text));
    this.text = "";
    this.forceUpdate();
  };

  addNote = () => {
    if (this.text === "") return;
    this.notes.push(this.text);
    this.text = "";
    this.forceUpdate();
  };

  checkHabit = (habit) => {
    habit.toggle();
    this.forceUpdate();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type a habit or a note..."
          placeholderTextColor="gray"
          value={this.text}
          onChangeText={this.typing}
        />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.addHabit}>
            <Text style={styles.buttonText}>Add Habit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.addNote}>
            <Text style={styles.buttonText}>Add Note</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Text style={styles.title}>My Habits</Text>
          {this.habits.map((habit, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, habit.done && styles.cardDone]}
              onPress={() => this.checkHabit(habit)}
            >
              <Text style={styles.text}>
                {habit.done ? "✅" : "⬜"} {habit.name}
              </Text>
              <Text style={styles.streak}>🔥 Streak: {habit.streak}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.title}>My Notes</Text>
          {this.notes.map((note, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.text}>{note}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
