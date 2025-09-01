const ALINK_REPO = "https://github.com/A-23187/alink";
export async function onRequest(context) {
  const gitPatch = await fetch(`${ALINK_REPO}/commit/${context.params.link}.patch`).then(resp => resp.text());
  const to = gitPatch.match(/^Subject:\s*\[PATCH\]\s*(.+)\s*$/m)?.[1];
  return new Response(null, { status: 301, headers: { Location: to || ALINK_REPO }});
}
