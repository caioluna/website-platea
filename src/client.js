import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'yezmoxls',
	dataset: 'production',
	useCdn: true,
})
