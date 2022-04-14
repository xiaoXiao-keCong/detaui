import { defineComponent,defineProps } from "vue";
import type { IDetaIcon } from './types/IIcon'
export default defineComponent<IDetaIcon>({
  name: "deta-icon",
  setup(props, context): () => JSX.Element {

    return () => {
      return <i class={`${context.attrs.icon}`}></i>
    }
  },
});
