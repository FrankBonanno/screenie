'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const AuthPage = () => {
	const handleSignIn = async () => {
		return await authClient.signIn.social({ provider: 'google' });
	};

	return (
		<main className="sign-in">
			<aside className="testimonial">
				<Link href="/">
					<Image src="/assets/icons/logo.svg" width={32} height={32} alt="logo" />
					<h1>Screenie</h1>
				</Link>

				<div className="description">
					<section>
						<figure>
							{Array.from({ length: 5 }).map((_, index) => (
								<Image src="/assets/icons/star.svg" width={20} height={20} alt="star" key={index} />
							))}
						</figure>

						<p>
							Screenie makes screen recording easy. From quick walkthroughs to full presentations, it&apos;s fast,
							smooth, and shareable in seconds.
						</p>

						<article>
							<Image src="/assets/images/jason.png" width={64} height={64} alt="user" className="rounded-full" />
							<h2>Jason Rivera</h2>
							<p>Product Designer, NovaByte</p>
						</article>
					</section>
				</div>

				<p>© Screenie {new Date().getFullYear()}</p>
			</aside>

			<aside className="google-sign-in">
				<section>
					<Link href="/">
						<Image src="/assets/icons/logo.svg" width={40} height={40} alt="logo" />
						<h1>Screenie</h1>
					</Link>

					<p>
						Create and share your very first <span>Screenie video</span> in no time!
					</p>

					<button onClick={handleSignIn}>
						<Image src="/assets/icons/google.svg" alt="google" width={22} height={22} />
						<span>Sign in with Google</span>
					</button>
				</section>
			</aside>

			<div className="overlay" />
		</main>
	);
};

export default AuthPage;
