import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { supabase } from './supabaseClient'; // فایل supabaseClient.js که ساختیم

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let { data, error } = await supabase.from('profiles').select('*');
      if (error) {
        console.log('Error fetching profiles:', error);
      } else {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      {users.length > 0 ? (
        users.map((user) => <Text key={user.id}>{user.email}</Text>)
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
