import java.io.RandomAccessFile;
import java.util.Scanner;

import java.lang.Exception;

class DummyFileMaker {
	public static void main(String[] args)
		throws Exception {

		Scanner reader = new Scanner(System.in);
		System.out.println("Enter size: ");

		int size = reader.nextInt();

		RandomAccessFile rac = new RandomAccessFile("DummyFile", "rw");
		rac.setLength(size);
	}
}