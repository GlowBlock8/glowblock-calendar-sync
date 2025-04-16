
import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import dayjs from 'dayjs';

export default function GlowBlockCalendar() {
  const [selectedDate, setSelectedDate] = useState(11);
  const daysInMonth = dayjs('2025-04-01').daysInMonth();

  return (
    <View className="flex-1 bg-black px-4 py-10">
      {/* Header */}
      <Text className="text-cyan-400 text-3xl font-bold text-center mb-4">APRIL 2025</Text>

      {/* Calendar Grid */}
      <View className="bg-[#0d0d0d] p-4 rounded-2xl border border-cyan-700 mb-6">
        <View className="flex-row justify-between mb-2">
          {['SUN','MON','TUE','WED','THU','FRI','SAT'].map((d, i) => (
            <Text key={i} className="text-cyan-200 text-xs text-center flex-1">{d}</Text>
          ))}
        </View>
        <View className="flex-wrap flex-row">
          {[...Array(daysInMonth)].map((_, i) => {
            const isSelected = i + 1 === selectedDate;
            return (
              <View key={i} className="w-[14.2%] items-center mb-2">
                <TouchableOpacity
                  onPress={() => setSelectedDate(i + 1)}
                  className={`w-8 h-8 items-center justify-center rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-[#1a1a1a]'}`}
                >
                  <Text className={`${isSelected ? 'text-black font-bold' : 'text-cyan-200'}`}>{i + 1}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>

      {/* Your Day Section */}
      <View className="bg-[#0d0d0d] rounded-2xl border border-cyan-700 px-4 py-4">
        <Text className="text-cyan-300 text-lg font-semibold mb-3">APRIL {selectedDate}</Text>
        <ScrollView>
          {[
            { time: '8:30 AM', label: 'Gym', icon: <FontAwesome5 name="dumbbell" size={16} color="#67e8f9" /> },
            { time: '9:00 AM', label: 'Breakfast', icon: <Ionicons name="restaurant" size={18} color="#67e8f9" /> },
            { time: '11:00 AM', label: 'Shower', icon: <MaterialIcons name="shower" size={18} color="#67e8f9" /> },
            { time: '4:00 PM', label: 'Work', icon: <Ionicons name="briefcase" size={18} color="#67e8f9" /> },
            { time: '5:00 PM', label: 'Podcast', icon: <Ionicons name="mic" size={18} color="#67e8f9" /> },
            { time: '9:30 PM', label: 'Sleep', icon: <Ionicons name="bed" size={18} color="#67e8f9" /> },
          ].map((item, idx) => (
            <View key={idx} className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center space-x-3">
                {item.icon}
                <Text className="text-cyan-100 text-base">{item.label}</Text>
              </View>
              <Text className="text-cyan-400 text-sm">{item.time}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
