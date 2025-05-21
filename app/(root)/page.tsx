import EmptyState from '@/components/EmptyState';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { getAllVideos } from '@/lib/actions/video';

const HomePage = async ({ searchParams }: SearchParams) => {
	const { query, filter, page } = await searchParams;

	const { videos, pagination } = await getAllVideos(query, filter, Number(page) || 1);

	return (
		<main className="wrapper page">
			<Header title="All Videos" subHeader="Public Library" />

			{videos?.length > 0 ? (
				<section className="video-grid">
					{videos.map(({ video, user }) => (
						<VideoCard
							key={video.id}
							{...video}
							userImg={user?.image || ''}
							username={user?.name || 'Guest'}
							thumbnail={video.thumbnailUrl}
						/>
					))}
				</section>
			) : (
				<EmptyState
					icon="/assets/icons/video.svg"
					title="No Videos Found"
					description="Try adjusting your search filters."
				/>
			)}
		</main>
	);
};

export default HomePage;
