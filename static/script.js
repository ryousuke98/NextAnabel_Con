class MenuLinks extends React.Component {
  constructor(props) {
    super(props);
    // Any number of links can be added here
    this.state = {
      links: [{
        text: 'Author',
        link: 'https://github.com/Lakston',
        icon: 'fa-pencil-square-o' },
      {
        text: 'Github page',
        link: 'https://github.com/Lakston',
        icon: 'fa-github' },
      {
        text: 'Twitter',
        link: 'https://twitter.com/Fab_is_coding',
        icon: 'fa-twitter' }] };


  }
  render() {
    let links = this.state.links.map((link, i) => React.createElement("li", { ref: i + 1 }, React.createElement("i", { "aria-hidden": "true", className: `fa ${link.icon}` }), React.createElement("a", { href: link.link, target: "_blank" }, link.text)));

    return (
      React.createElement("div", { className: this.props.menuStatus, id: "menu" },
      React.createElement("ul", null,
      links)));



  }}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false };

    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }
  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
        isOpen: false });

    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen });

  }
  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';

    return (
      React.createElement("div", { ref: "root" },
      React.createElement("div", { className: "menubar" },
      React.createElement("div", { className: "hambclicker", onClick: this._menuToggle }),
      React.createElement("div", { id: "hambmenu", className: menuStatus }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)),
      React.createElement("div", { className: "title" },
      React.createElement("span", null, this.props.title))),


      React.createElement(MenuLinks, { menuStatus: menuStatus })));


  }}


ReactDOM.render(React.createElement(Menu, { title: "Lay Worth" }), document.getElementById('app'));