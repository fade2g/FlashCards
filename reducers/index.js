// TODO HHE Provide proper implementation

import {DUMMY} from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case DUMMY:
      return{...state}
  }
}
