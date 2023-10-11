<html>
<head>
	<headCommon />
</head>
<body>
	<navbar />

	<table border="single">
		<tbody>
			<tr>
				<th>
					email
				</th>
				<th>
					details
				</th>
				<th>
					reason
				</th>
				<th>
					submit
				</th>
			</tr>
			<tr>
				<td>
					<?php
					print($_POST['email'])
					?>
				</td>
				<td>
					<?php
					print($_POST['details'])
					?>
				</td>
				<td>
					<?php
					print($_POST['reason'])
					?>
				</td>
				<td>
					<?php
					print($_POST['submit'])
					?>
				</td>
			</tr>
		</tbody>
	</table>

</body>
</html> 
