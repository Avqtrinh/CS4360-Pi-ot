import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Home from './Home';
import Dashboard from './Dashboard';
import Stats from './Stats';
import Log from './Log';
import Login from './Login';
import Logout from './Logout';
import Navigation from './Navigation';
import Routes from './Routes';
import Signup from './Signup';

const emptyData = {
    columns: [],
    rows: []
};

const mockData = {
    columns: [
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 75
      },
      {
        label: 'Time',
        field: 'time',
        sort: 'asc',
        width: 75
      },
      {
        label: 'GPS coordinates',
        field: 'gps_coordinates',
        sort: 'asc',
        width: 125
      }
    ],
    rows: [
      {
        date: '3-19-19',
        time: '12:34 PM',
        gps_coordinates: '39.744, -105.008'
      },
      {
        date: '3-19-19',
        time: '12:34 PM',
        gps_coordinates: '39.744, -105.008'
      },
      {
        date: '3-19-19',
        time: '12:34 PM',
        gps_coordinates: '39.744, -105.008'
      }
    ]
};

const findTest = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

//#region ShallowSetup
const app = (props={}) => {
    const component = shallow(<App {...props} />);
    return component;
};

const signup = (props={}) => {
    const component = shallow(<Signup {...props} />);
    return component;
};

const routes = (props={}) => {
    const component = shallow(<Routes {...props} />);
    return component;
};

const home = (props={}) => {
    const component = shallow(<Home {...props} />);
    return component;
};

const dashboard = (props={}) => {
    const component = shallow(<Dashboard {...props} />);
    return component;
};

const log = (props={}) => {
    const component = shallow(<Log {...props} />);
    return component;
};

const login = (props={}) => {
    const component = shallow(<Login {...props} />);
    return component;
};

const logout = (props={}) => {
    const component = shallow(<Logout {...props} />);
    return component;
};

const navigation = (props={}) => {
    const component = shallow(<Navigation {...props} />);
    return component;
};

const stats = (props={}) => {
    const component = shallow(<Stats {...props} />);
    return component;
};
//#endregion

//#region ComponentTesting
describe('App component', () => {
    let component;
    beforeEach(() => {
        component = app();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'app');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });


});

describe('Home component', () => {
    let component;
    beforeEach(() => {
        component = home();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'home');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });

    it('HasHeaderElement', () => {
        expect(component.find("h1")).toHaveLength(1);
    });

    it('HasParagraphElements', () => {
        expect(component.find("p")).toHaveLength(2);
    });
});

describe('Dashboard component', () => {
    let component;
    beforeEach(() => {
        component = dashboard();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'dashboard');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });

    it('HasPiComponentElements', () => {
        expect(component.find("ul")).toHaveLength(1);      expect(component.find("li")).toHaveLength(4);
    });

    it('IsStateIsLoadingFalse', () => {
        expect(component.state().didLoad).toBe(false);
    });

    it('IsStateIsLoadingTrue', () => {
        const instance = component.instance();
        instance.componentDidMount();
        expect(component.state().didLoad).toBe(false);
    });
});

describe('Signup component', () => {
    let component;
    beforeEach(() => {
        component = signup();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'signup');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });

    it('HasHTMLElements', () => {
        expect(component.find("div")).toHaveLength(5);
        expect(component.find("input")).toHaveLength(5);
        expect(component.find("label")).toHaveLength(5);
    });

    it('doesVariableEmailChange', () => {
        component.state().email = "email"
        expect(component.state().email).toEqual("email");
    });
});

describe('Routes component', () => {
    let component;
    beforeEach(() => {
        component = routes();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'routes');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Stats component', () => {
    let component;
    beforeEach(() => {
        component = stats();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'stats');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });
});

describe('Log component', () => {
    let component;
    beforeEach(() => {
        component = log();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'log');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });

    it('DidReturnEmptyData', () => {
        const c = shallow(<Log data={emptyData} />);
        expect(c).toMatchSnapshot();
    });

    it('DidReturnData', () => {
        const c = shallow(<Log data={mockData} />);
        expect(c).toMatchSnapshot();
    });
});

describe('Login component', () => {
    let component;
    beforeEach(() => {
        component = login();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'login');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });

    it('HasHeaderElement', () => {
        expect(component.find("h2")).toHaveLength(1);
    });

    it('HasParagraphElement', () => {
        expect(component.find("p")).toHaveLength(1);
    });

    it('HasLabelElements', () => {
        expect(component.find("label")).toHaveLength(2);
    });

    it('HasInputElements', () => {
        expect(component.find("label")).toHaveLength(2);
    });

    it('HasSubmitElement', () => {
        const wrapper = findTest(component, 'loginSubmit');
        expect(wrapper.length).toBe(1);
    });
});

describe('Logout component', () => {
    let component;
    beforeEach(() => {
        component = logout();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'logout');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });

    it('HasHeaderElement', () => {
        expect(component.find("h2")).toHaveLength(1);
    });
});

describe('Navigation component', () => {
    let component;
    beforeEach(() => {
        component = navigation();
    });

    it('InitialRender', () => {
        const wrapper = findTest(component, 'navigation');
        expect(wrapper.length).toBe(1);
    });

    it('DidComponentMount', () => {
        expect(component).toMatchSnapshot();
    });
});
//#endregion
