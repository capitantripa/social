const initialState = {
  confirm: {
    state: false,
    action: null,
    title: null,
    message: null,
  },
  notific: {
    active: false,
    pending: false,
    loading: false,
    items: [],
    num_pages: 0,
    current_page: 0,
  },
  menu:{
    active: false,
  },
  search: {
    active: false,
    query: '',
  },
  user: {
    logged: 'loading',
    name: '',
    type: '',
    token: '',
    id: '',
    username: null,
  },
  alert: {
    message: null,
  },
  pages: {
    activate: {
      status: 'loading',
      code: null,
      id_user: 0,
    },
    tags: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
    },
    login: {
      view: 'form',
      mail: '',
      password: '',
    },
    register: {
      view: 'form',
      mail: '',
      password: '',
      re_password: '',
      name: '',
      username: '',
      sexo: '',
    },
    create_post: {
      view: 'form',
      title: '',
      content: '',
      category: '',
      tags: [],
      tag_text: '',
      picture: 'form',
      images: 'button',
      url: null,
    },
    edit_post: {
      view: 'loading_post',
      title: '',
      content: '',
      category: '',
      tags: [],
      tag_text: '',
      picture: 'form',
      images: 'button',
      url: null,
      id: null,
    },
    post: {
      loading: true,
      id: 0,
      content: '',
      title: '',
      coments: [],
      url: '',
      category: '',
      tags: [],
      error: false,
      meta: {},
      loading_coments: true,
      content_coment: '',
      current_page_coment: 0,
      pages_coments: null,
      saved: 'loading',
    },
    myposts: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
    },
    category: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
      name: '',
      url: '',
      id: null,
    },
    tag: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
      name: '',
    },
    mysaved: {
      loading: true,
      items: [],
      pages: 0,
      current_page: 0,
    }
  },
  posts: {
    loading: true,
    items: [],
    pages: 0,
    current_page: 0,
  },
  category: {
    loading: true,
    items: [],
  }
}

export default initialState;
