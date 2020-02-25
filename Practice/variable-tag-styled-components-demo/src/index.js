import React from 'react';
import { render } from 'react-dom';

import Wrapper from './Wrapper';
import Title from './Title';

const App = () =>
  <Wrapper>
    <Title>Standard default usage with an &lt;h1&gt; tag</Title>

    <Title tag="p">Let's switch to a &lt;p&gt; tag</Title>

    <Title tag="span">Or a &lt;span&gt; tag</Title>

    <Title tag="h1" unknownProp="blalbla">
      And unknown props are still filtered
    </Title>
  </Wrapper>;

render(<App />, document.getElementById('root'));
