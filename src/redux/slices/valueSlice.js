import { createSlice } from '@reduxjs/toolkit';

const valueSlice = createSlice({
  name: 'myName',
  initialState: { myName: 'Hello, Sarwar' }, // Initial value
  reducers: {
    setName: (state, action) => {
      state.value = action.payload; // Update the value
    },
  },
});

export const { setName } = valueSlice.actions;
export default valueSlice.reducer;
