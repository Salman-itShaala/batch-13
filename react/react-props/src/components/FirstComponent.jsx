export function FirstComponent() {
  let age = 2;

  const showMessage = false;

  const isLoading = false;

  if (isLoading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <div className="container">
        <h1>Conditional rendering</h1>

        {age > 18 ? <h1>You can vote</h1> : <h1>You can not vote</h1>}

        {showMessage && <p>Message</p>}
      </div>
    );
  }
}
