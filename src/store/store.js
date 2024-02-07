import { create } from 'zustand'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const useStore = create((set) => ({
  activeStep: 2,
  bears: 0,
  setActiveStep: () => set((state) => ({activeStep: state.activeStep + 1})),
  handleBack: () => set((state) => ({activeStep: state.activeStep - 1})),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useStore;