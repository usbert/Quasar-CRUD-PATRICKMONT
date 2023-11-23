import useApi from 'src/composables/UseApi';

export default function postsServices () {
  const { list, post, update, remove } = useApi()

  return {
    list,
    post,
    update,
    remove
  }
}
