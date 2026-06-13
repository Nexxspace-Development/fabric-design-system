function Login({ onEnter }) {
  const { Card, Button, Input, Divider } = window.FabricDesignSystem_7bb975;
  const Icon = window.Icon;
  return (
    <div className="fa-login fabric-weave">
      <Card elevation="floating" padding="lg" className="fa-login__card">
        <img src="../../assets/fabric-mark.svg" alt="" width="40" height="40" className="fa-login__mark" />
        <h1 className="fa-login__title">Welcome back</h1>
        <p className="fa-login__sub">A quiet place to do one thing at a time.</p>
        <div className="fa-login__form">
          <Input label="Email" type="email" placeholder="you@studio.com" defaultValue="wren@aldous.studio" />
          <Button block size="lg" trailingIcon={<Icon name="arrow-right" size={18} />} onClick={onEnter}>
            Enter your studio
          </Button>
        </div>
        <Divider label="or" variant="stitch" />
        <Button variant="secondary" block leadingIcon={<Icon name="key-round" size={17} />} onClick={onEnter}>
          Continue with a passphrase
        </Button>
      </Card>
      <p className="fa-login__foot">Made from nature · Fabric</p>
    </div>
  );
}
window.FabricApp.Login = Login;
