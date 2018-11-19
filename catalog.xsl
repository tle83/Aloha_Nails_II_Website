<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="xmlStyle.css"/>
			</head>
			<body>
				<table border="1" cellspacing="10" frame="hsides" rules="rows">
					<tr>
						<th style="text-align:left" width="250">Service Name</th>
						<th style="text-align:left" width="100">Price</th>
						<th style="text-align:left">Description</th>
					</tr>

					<xsl:for-each select="catalog/service">
						<tr>
							<td><xsl:value-of select="name"/></td>
							<td><xsl:value-of select="price"/></td>
							<td><xsl:value-of select="info"/></td>
						</tr>
					</xsl:for-each>

				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>