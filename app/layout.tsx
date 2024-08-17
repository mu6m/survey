export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
					rel="stylesheet"
				/>
				<style>
					{`
						* {
							font-family: 'Cairo', sans-serif;
						}
					`}
				</style>
			</head>
			<body>{children}</body>
		</html>
	);
}
