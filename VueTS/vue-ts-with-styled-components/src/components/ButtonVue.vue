<template>
  <ButtonVue :type="type" :radius="radius">
    <slot />
  </ButtonVue>
</template>
<script>
import styled from "vue-styled-components";

const typeButton = {
  type: String,
  radius: Boolean
};

const styleButton = type => {
  switch (type) {
    case "primary":
      return `
                background-color: #FFFFFF;
                color: #0057AA;
            `;
    case "error":
      return `
                background-color: #B4000B;
                color: #FDFDFD;
            `;
    case "success":
      return `
            background-color: #00C887;
            color: #37435F;
        `;
    default:
      return `
                background-color: #0057AA;
                color: #FFFFFF;
            `;
  }
};

const ButtonVue = styled("button", typeButton)`
  font-size: 1em;
  text-align: center;
  padding: 10px 15px;
  border-radius: ${({ radius }) => (radius ? "6px" : null)};
  ${props => styleButton(props.type)}
`;

export default {
  name: "ButtonVue-Template",
  props: {
    type: String,
    radius: Boolean
  },
  components: { ButtonVue }
};
</script>
