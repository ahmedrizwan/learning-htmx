export async function Toast(props: { text: string }) {
  return (
    <div
      id={`toast`}
      class={`sticky left-16 bottom-6`}
      hx-swap-oob="true"
    >
      <div class="inline-block pr-4 pl-4 pt-2 pb-2 rounded-md bg-white shadow-md hide-animation">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
