<template>
  <div class="home">
    <styled-button />
  </div>
</template>

<script>
import { StyledButton } from "@/components/Button.ts";

export default {
  name: "home",
  components: {
    "styled-button": StyledButton
  }
};
</script>
