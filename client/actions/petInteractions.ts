import { ThunkAction } from '../store'
import { getPetData, updatePet } from '../apis/petInteractions'
import { PetIntData } from '../../Model/petInt'

export const SET_PETINTERACTION_PENDING = 'SET_PETINTERACTION_PENDING'
export const SET_PETINTERACTION_SUCCESS = 'SET_PETINTERACTION_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type PetInteractionAction =
  | { type: typeof SET_PETINTERACTION_PENDING; payload: null }
  | { type: typeof SET_PETINTERACTION_SUCCESS; payload: PetIntData[] }
  | { type: typeof SET_ERROR; payload: string }

export function setPetInteractionsPending(): PetInteractionAction {
  return {
    type: SET_PETINTERACTION_PENDING,
    payload: null,
  }
}

export function setPetInteractionSuccess(
  data: PetIntData[]
): PetInteractionAction {
  return {
    type: SET_PETINTERACTION_SUCCESS,
    payload: data,
  }
}

export function setError(errMessage: string): PetInteractionAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

// Fetch pet interaction data
export function fetchPetData(token: string): ThunkAction {
  return async (dispatch) => {
    try {
      dispatch(setPetInteractionsPending())
      const pets = await getPetData(token)
      dispatch(setPetInteractionSuccess(pets))
      // Handle success case
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error fetching pet interaction data:', error)
      }
    }
  }
}

// Update pet interaction data and delete inventory item
export function updatePetInteraction(
  pet: PetIntData,
  token: string
): ThunkAction {
  return async (dispatch) => {
    try {
      await updatePet(pet)
      const pets = await getPetData(token)
      // only fetch pet data
      dispatch(setPetInteractionSuccess(pets))
      // Handle success case
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message))
        // Handle error case
        console.error('Error updating pet interaction data:', error)
      }
    }
  }
}
