
import createFlux from '../../../createFlux.js';
import initialState from '../../../initialState.js';
import api from '../../../api.js';
import { combineReducers } from 'redux';
import {set_title, set_message, set_state, set_action } from '../../../flux/confirm.js';


const flux = createFlux('pages/mysaved');

//async action creators
export const load_posts = () => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const state = getState();
  const { current_page } = state.pages.mysaved;
  const { id, token } = state.user;
  const response = await api.post.get_list_saved(id, token, current_page + 1);
  if (!response.error){
    dispatch(insert_items(response.items));
    dispatch(set_pages(response.pages));
    dispatch(set_currentpage(current_page + 1));
  }
  dispatch(set_loading(false));
}

export const confirm_delete  = (id) => (dispatch) => {
  dispatch(set_title('Eliminar post guardado'))
  dispatch(set_message('Realmente quiere eliminar este post que has guardado'))
  dispatch(set_state(true));
  dispatch(set_action(delet_save(id)));
}

const delet_save = (id_saved) => async (dispatch, getState) => {
  const state = getState();
  const token = state.user.token;
  const id_user = state.user.id;

  const response = await api.post.delete_save({id_saved, token, id_user});

  if (!response.error){
    dispatch(set_initialState());
    dispatch(load_posts());
  } else {
    alert(response.errorMessage);
    location.reload();
  }
}


//sync actions
export const set_initialState = flux.createActionInitialState();
const set_loading = flux.createActionCreator('SET_LOADING');
const set_pages = flux.createActionCreator('SET_PAGES');
const set_currentpage = flux.createActionCreator('SET_CURRENTPAGE');
const insert_items = flux.createActionCreator('INSERT_ITEMS');


//reducers
const localstate = initialState.pages.mysaved;

const loading = flux.createReducer(localstate.loading, 'SET_LOADING');
const items = flux.createReducer(localstate.items, 'INSERT_ITEMS', 'CONCAT');
const pages = flux.createReducer(localstate.pages, 'SET_PAGES');
const current_page = flux.createReducer(localstate.current_page, 'SET_CURRENTPAGE');

export default combineReducers({loading, items, pages, current_page});
